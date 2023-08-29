<template>
    <div class="pt-20 ">
        <div class="container mx-auto px-4">
          <div class="message text-center">
            <h1 class="text-3xl font-bold pt-10">𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐎𝐫𝐝𝐞𝐫 </h1>
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
            <p>𝗞𝗼𝗱𝗲 𝗣𝗲𝗺𝗲𝘀𝗮𝗻𝗮𝗻 : {{ getOrder.code }}</p>
            <p class="italic">
              𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘁𝗵𝗲 𝘁𝗿𝘂𝘀𝘁 𝗧𝗻./𝗡𝘆. {{ getOrder.user.name }} 
            </p>
          </div>
          <div class="py-10 text-center">
                <a href="/produk" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                  𝑮𝑶 𝑩𝑨𝑪𝑲 
               </a>
            </div>
          <br>
          <hr>
          <div class="mx-10 mt-10">
            <div class="grid grid-cols-2">
              <div>
                <dl
                  class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
                >
                  <div class="flex flex-col pb-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗞𝗼𝗱𝗲 𝗣𝗲𝗺𝗲𝘀𝗮𝗻𝗮𝗻 : 
                    </dt>
                    <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
                  </div>
                  <div class="flex flex-col pb-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗔𝗹𝗮𝗺𝗮𝘁 𝗘𝗺𝗮𝗶𝗹 : 
                    </dt>
                    <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
                  </div>
                  <div class="flex flex-col py-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗔𝗹𝗮𝗺𝗮𝘁 𝗥𝘂𝗺𝗮𝗵 : 
                    </dt>
                    <dd class="text-lg font-semibold">
                      {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                    </dd>
                  </div>
                  <div class="flex flex-col pt-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗡𝗼𝗺𝗼𝗿 𝗧𝗲𝗹𝗽𝗼𝗻 :
                    </dt>
                    <dd class="text-lg font-semibold">
                      {{  getOrder.shipping_address.phone }}
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <dl
                  class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
                >
                  <div class="flex flex-col pb-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗠𝗲𝘁𝗼𝗱𝗲 𝗣𝗲𝗺𝗯𝗮𝘆𝗮𝗿𝗮𝗻 : 
                    </dt>
                    <dd class="text-lg font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
                  </div>
                  <div class="flex flex-col pb-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗠𝗲𝘁𝗼𝗱𝗲 𝗣𝗲𝗻𝗴𝗶𝗿𝗶𝗺𝗮𝗻 : 
                    </dt>
                    <dd class="text-lg font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
                  </div>
                  <div class="flex flex-col py-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗔𝗹𝗮𝗺𝗮𝘁 𝗧𝗮𝗴𝗶𝗵𝗮𝗻 : 
                    </dt>
                    <dd class="text-lg font-semibold">
                      {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                    </dd>
                  </div>
                  <div class="flex flex-col pt-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      𝗧𝗼𝘁𝗮𝗹 𝗛𝗮𝗿𝗴𝗮 𝗕𝗮𝗿𝗮𝗻𝗴 :
                    </dt>
                    <dd class="text-lg font-semibold">
                      {{  getOrder.orders[0].grand_total }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <br>
          <hr>
          {{ orderData }}
        </div>
      </div>
    </template>
    
    <script>
    import { mapGetters } from 'vuex';
    export default {
      props: ['orderCode'],
      computed: {
        ...mapGetters('order', ['getOrder']),
      },
      created() {
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
      },
    };
    </script>