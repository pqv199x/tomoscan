<template>
    <div>
        <input
            v-model="search"
            type="text"
            class="form-control search-form__input"
            placeholder="Search Address / TX / Block..."
            @input="onChange">
        <ul
            v-show="isOpen"
            class="autocomplete-results">
            <li
                v-for="(result, index) in results"
                :key="index"
                :class="{ 'is-active': i === arrowCounter }"
                class="autocomplete-result"
                @click="setResult(result)">
                {{ result }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    data () {
        return {
            search: '',
            results: [],
            isOpen: false,
            arrowCounter: -1
        }
    },
    mounted () {
        document.addEventListener('click', this.handleClickOutside)
    },
    destroyed () {
        document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
        onChange () {
            this.isOpen = true
            this.filterResults()
        },
        filterResults () {
            this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        },
        setResult (result) {
            this.search = result
            this.isOpen = false
        },
        handleClickOutside (evt) {
        if (!this.$el.contains(evt.target)) {
                this.isOpen = false
                this.arrowCounter = -1
            }
        }
    }
  }
</script>
