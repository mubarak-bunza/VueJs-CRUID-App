<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-md-8">
                <div class="jumbotron table-responsive">
                    <table class="table table-hover">
                        <caption>{{candidates.length}} Candidate Screened with total score of {{totalScore}}</caption>
                        <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Role</th>
                                <th scope="col">Score</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(candidate, index) in candidates" :key='index'>
                                <th scope="row">{{index+1}}</th>
                                <td>{{candidate.name}}</td>
                                <td>{{candidate.city}}</td>
                                <td>{{candidate.role}}</td>
                                <td>{{candidate.score}}</td>
                                <td>
                                    <button @click="removeCandidate(index)" class="my-btn btn btn-danger mr-2">
                                        <img src="../assets/icons/trash.svg"  alt="trash-icon" width="25" height="25" title="Remove">
                                    </button>
                                    <button @click="editCandidate(candidate)" class="my-btn btn btn-info">
                                        <img src="../assets/icons/pencil.svg" alt="pencil-icon" width="25" height="25" title="Edit">
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <!-- <app-form /> -->
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="name">Name</label>
                            <input v-model="candidateForm.name" type="text" class="form-control" id="name" required>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="city">City</label>
                            <input v-model="candidateForm.city" type="text" class="form-control" id="city" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="role">Role</label>
                            <input v-model="candidateForm.role" type="text" class="form-control" id="role" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="score">Score</label>
                            <input v-model="candidateForm.score" type="text" class="form-control" id="score" required>
                        </div>
                    </div>
                    <div class="form-group float-right">
                        <button v-if="flag" type="submit" v-on:click.prevent="addCandidate()" class="btn btn-primary">Submit</button>
                        <button v-else type="submit" v-on:click.prevent="editCandidate" class="btn btn-info">Update</button>
                        <button type="reset" class="btn btn-danger ml-2">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // import Form from '@/components/Form.vue'
    import Swal from 'sweetalert2'
    export default {
        name: 'contents',
        components: {
            // 'app-form': Form
        },
        data() {
            return {
                candidates: [
                    {
                        name: 'Mark Otto',
                        city: 'Lagos',
                        role: 'DevOps',
                        score: 40
                    },
                    {
                        name: 'Amanie Sandy',
                        city: 'Uyo',
                        role: 'PHP Devloper',
                        score: 45
                    },
                    {
                        name: 'Gift Jonah',
                        city: 'Itam',
                        role: 'JS Developer',
                        score: 40
                    }
                ],
                candidateForm: {
                    name: null,
                    city: null,
                    role: null,
                    score: null
                },
                flag: true
            }
        },
        computed: {
            totalScore(){
                let tScore = 0;
                for(let i = 0; i <this.candidates.length; i++){
                    if(isNaN(this.candidates[i].score)){
                        continue;
                    }else{
                        tScore += parseInt(this.candidates[i].score);
                    }
                }
                return tScore;
            }
        },
        methods: {
            addCandidate(){
                if(this.candidateForm.name != null && this.candidateForm.score != null ){
                    this.candidates.push(this.candidateForm);
                    this.candidateForm = {};
                    Swal.fire(
                        'Success!',
                        'Candidate added successfully!',
                        'success'
                    )
                }else{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'error',
                        title: 'Fields can not be empty!'
                    })
                }
            },
            editCandidate(candidate) {
                this.flag = !this.flag;
                this.candidateForm = candidate;
                // Swal.fire(
                //     'Success!',
                //     'Candidate updated successfully!',
                //     'success'
                // )  
            },
            updateCandidate(){
                // console.log(this.candidateForm)
            },
            removeCandidate(index){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to remove this user!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, remove!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                            'Candidate has been deleted.',
                            'success'
                        )
                        this.candidates.splice(index,1);
                    }
                })                
            }
        }    
    }
</script>

<style lang="scss" scoped>
    .my-btn {
        padding: 0px 10px;
        img{
            filter: invert(1);
        }
    }

    
</style>