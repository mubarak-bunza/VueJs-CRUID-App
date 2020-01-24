<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-md-8">
                <div class="jumbotron">
                    <table class="table table-hover">
                        <caption>{{candidates.length}} Candidate Registered with total score of {{totalScore}}</caption>
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
                                    <button >
                                        <img src="../assets/icons/trash.svg"  alt="trash-icon" width="30" height="30" title="Remove">
                                    </button>
                                    <button @click.prevent="editCandidateDetails(candidate)">
                                        <img src="../assets/icons/pencil.svg" alt="pencil-icon" width="30" height="30" title="Edit">
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
                        <button v-else type="submit" v-on:click.prevent="editCandidateDetails" class="btn btn-primary">Update</button>
                        <button type="reset" class="btn btn-danger ml-2">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // import Form from '@/components/Form.vue'

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
                    name: "",
                    city: "",
                    role: "",
                    score: null
                },
                flag: true
            }
        },
        computed: {
            totalScore(){
                let tScore = 0;
                for(let i = 0; i <this.candidates.length; i++){
                    tScore += parseInt(this.candidates[i].score);
                }
                return tScore;
            }
        },
        methods: {
            addCandidate(){
                this.candidates.push(this.candidateForm);
            },
            editCandidateDetails(candidate) {
                this.flag = false;
                this.candidateForm = candidate;
            }
        }    
    }
</script>