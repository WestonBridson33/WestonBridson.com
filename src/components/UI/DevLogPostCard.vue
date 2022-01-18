<template>
    <v-card color="primary darken-4" @click="setActivePost" class="pa-4 mr-16">
        <div class="caption font-weight-light secondary--text pb-4">
            {{ date.slice(4, 15) }}
        </div>
        <div v-if="image" class="text-center pb-2"> 
            <img
                :src="image"
                width="450"
            />

        </div>
        <div class="body secondary--text px-9">
            {{title}}
        </div>
    </v-card>
</template>
<script>
export default {
    props: {
        youtube: {
            type: String,
            required: false,
            default: "",
        },
        localVid: {
            type: String,
            required: false,
            default: "",
        },
        image: {
            type: String,
            required: false,
            default: "",
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
    },
    emits:['selected'],
    methods: {
        setActivePost(){
            this.$emit('selected', this.id);
        }
    },
    mounted(){
        console.log(this.text, this.image)
    }
    
}
</script>