<template>
    <br>
    <br>
 <div class="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div class="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center">
      <img class="h-14 w-14 rounded-full object-cover" src="../assets/img/pp1.jpg" alt="Simon Lewis" />
      <div class="ml-4 w-56">
        <p class="text-slate-800 text-xl font-extrabold">{{ getUser.name }}</p>
        <p class="text-slate-500">{{ getUser.email }}</p>
        
      </div>
    </div>
    <button class="flex items-center justify-center gap-1 rounded-lg border border-emerald-500 px-4 py-2 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>

      <span>Active</span>
    </button>
  </div>
  <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Jalan</span>
        <span class="ml-auto"> {{ address.address }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Kode Pos</span>
        <span class="ml-auto">  {{ address.postal_code }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Kota</span>
        <span class="ml-auto">  {{ address.city }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Provinsi</span>
        <span class="ml-auto">  {{ address.state }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Negara</span>
        <span class="ml-auto">  {{ address.country }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Phone</span>
        <span class="ml-auto">  {{ address.phone }}</span>
      </li>
    </ul>

  <div class="flex justify-between py-8">
    <button class="text-slate-500 hover:bg-slate-100 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">Message</button>
    <button class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Follow</button>
  </div>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
        ... mapGetters('auth', ['getAddress']),
        address(){
          return this.getAddress.data[0]
        }
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
        ...mapActions('auth', ["getUserAddress"]),
    },
    created() {
      this.getUserAddress();
        this.fetchUser();
    },
}

</script>