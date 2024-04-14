<template>
    <h1>Login Page</h1>
    <form @submit="submit">
        <div>
            <label for="email">Email</label>
            <input id="email" v-model="email" name="email" type="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" v-model="password" name="password" type="password">
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
            email: '',
            password: '',
        }
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            console.log(this.email, this.password);
            const authData = await pb.collection('users').authWithPassword(this.email
            , this.password);
            console.log(authData);
        }
    }
}
</script>