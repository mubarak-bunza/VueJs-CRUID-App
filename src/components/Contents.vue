<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-md-7">
                <div class="jumbotron">

                </div>
            </div>
            <div class="col-md-5">
                <app-form />
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '@/components/Form.vue'

    export default {
        components: {
            'app-form': Form
        }    
    }
</script>