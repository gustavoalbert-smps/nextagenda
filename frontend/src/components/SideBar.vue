<template>
    <div class="sidebar fixed left-0 top-0 h-full w-78-px bg-custom-dark-blue">
        <div class="logo-details">
            <i class=""></i>
        </div>
        <ul class="nav-list">
            <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none">
                        <path d="M32.000 74.667V202.667C32.000 214.449 41.551 224.000 53.333 224.000L96.000 224.000M32.000 74.667L32.000 53.333C32.000 41.551 41.551 32.000 53.333 32.000H202.667C214.449 32.000 224.000 41.551 224.000 53.333V74.667M32.000 74.667H96.000M224.000 74.667V202.667C224.000 214.449 214.449 224.000 202.667 224.000H96.000M224.000 74.667H96.000M96.000 74.667V224.000" stroke="#fcfcfc" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" id="my-path" transform="translate(0,0) scale(1)"/>
                    </svg>
                    <span class="link_name">Dashboard</span>
                    <span class="tooltip">Dashboard</span>
                </a>
            </li>
            <li class="profile">
                <div class="profile-details">
                    <img src="" alt="Profile Image">
                    <div class="name_job">
                        <div class="name">                
                        </div>
                        <div class="job">
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none" id="log_out">                       
                    <path d="M128.000 42.667L85.333 42.667C73.551 42.667 64.000 52.218 64.000 64.000V192.000C64.000 203.782 73.551 213.333 85.333 213.333H128.000M202.667 128.000H106.667M202.667 128.000L170.667 96.000M202.667 128.000L170.667 160.000" stroke="#fcfcfc" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" id="my-path" transform="translate(0,0) scale(1)"/>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
    .sidebar {
        padding: 6px 14px;
        z-index: 99;
    }
    .sidebar.open {
        width: 250px;
    }

    .sidebar .logo-details {
        height: 60px;
        display: flex;
        align-items: center;
        position: relative;
    }
</style>

