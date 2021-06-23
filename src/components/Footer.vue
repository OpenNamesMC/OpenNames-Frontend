<template>
  <footer class="footer text-white dark:text-gray-700 bg-blue-100 dark:bg-gray-900 relative py-5">
    <div class="container mx-auto px-10">
        <div class="flex flex-col items-center">
            <div class="sm:w-2/3 text-center p-4">
                <p v-on:click="$router.push('/thanks/')" class="text-sm text-blue-700 dark:text-blue-300 font-semibold cursor-pointer mb-2">
                    © 2021 - Made with love
                </p>
            </div>
        </div>
    </div>
</footer>
</template>