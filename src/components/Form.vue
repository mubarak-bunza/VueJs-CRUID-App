<template>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group col-md-6">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="role">Role</label>
                <input type="text" class="form-control" id="role">
            </div>
            <div class="form-group col-md-6">
                <label for="score">Score</label>
                <input type="number" class="form-control" id="score">
            </div>
        </div>
        <button type="submit" class="btn btn-primary float-right">Submit</button>
    </form>
</template>