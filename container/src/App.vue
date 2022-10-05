<template>
    <div>
        <nav>
            <Navbar />
        </nav>
        <div class="content">
            <aside>
                <ul>
                    <li>
                        <router-link to="/">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link to="/app1/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/app2/contact">Contact</router-link>
                    </li>
                </ul>
            </aside>
            <div class="app">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from 'app2/Navbar'
export default {
    components: {
        Navbar
    }
};
</script>

<style>
@import './assets/base.css';
</style>
