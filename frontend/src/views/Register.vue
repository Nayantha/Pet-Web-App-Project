<template>
    <h1>Register Page</h1>
    <form @submit="submit">
    <div>
        <label for="username">Name</label>
        <input id="username" v-model="username" name="username" type="text">
    </div>
    <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" name="email" type="email">
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" v-model="password" name="password" type="password">
    </div>
    <div>
        <label for="retype_password">Re-type Password</label>
        <input id="retype_password" v-model="retype_password" name="retype_password" type="password">
    </div>
  <button type="submit">Submit</button>
    </form>
</template>
<script>

import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            retype_password: ''
        }
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            console.log(this.username, this.email, this.password, this.retype_password, this.password === this.retype_password);
            const data = {
                "username": this.username,
                "email": this.email,
                "emailVisibility": true,
                "password": this.password,
                "passwordConfirm": this.retype_password,
                "name": this.username
            };

            const record = await pb.collection('users').create(data);
            console.log(record);
        }
    }
}
</script>