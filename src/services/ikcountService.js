import ikcount from '@/utils/ikcountAxios';

const ikcountService = {
  /**
   *
   * @param {'manual-add' | 'manual-sub'} type
   * @param {number} quantity
   * @returns
   */
  setCount: async (type, quantity) => {
    try {
      const payload = {
        type,
        quantity,
        client: import.meta.env.VITE_APP_IKCOUNT_CLIENT,
        location: import.meta.env.VITE_APP_IKCOUNT_LOCATION,
        mac_address: import.meta.env.VITE_APP_IKCOUNT_MAC_ADDRESS,
      };
      return await ikcount.post('', payload);
    } catch (error) {
      console.log(error);
    }
  },
};

export default ikcountService;
