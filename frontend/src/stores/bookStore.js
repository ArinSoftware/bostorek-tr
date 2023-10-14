import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      {
        _id: '651032380cdcce620102355d',
        title: 'Islak Balık',
        author: 'Volker Kutscher',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 490,
        rating: 9.9,
        createdAt: '2023-09-24T12:57:28.808Z',
        updatedAt: '2023-09-24T12:57:28.808Z',
        __v: 0,
      },
      {
        _id: '651032740cdcce6201023560',
        title: 'Sultanın Korsanları',
        author: 'Emrah Safa Gürkan',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 432,
        rating: 7.2,
        createdAt: '2023-09-24T12:58:28.874Z',
        updatedAt: '2023-09-24T12:58:28.874Z',
        __v: 0,
      },
      {
        _id: '651032b20cdcce6201023563',
        title: '13 Numaralı Oda',
        author: 'Edgar Vallac',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 238,
        rating: 4.6,
        createdAt: '2023-09-24T12:59:30.383Z',
        updatedAt: '2023-09-24T12:59:30.383Z',
        __v: 0,
      },
      {
        _id: '651032dc0cdcce6201023566',
        title: 'Sırça Anahtar',
        author: 'Dashiel Hammett',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 217,
        rating: 6.1,
        createdAt: '2023-09-24T13:00:12.778Z',
        updatedAt: '2023-09-24T13:00:12.778Z',
        __v: 0,
      },
      {
        _id: '651033030cdcce620102356b',
        title: 'Kiraz Ağacı',
        author: 'Gökçer Tahincioğlu',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 217,
        rating: 7.9,
        createdAt: '2023-09-24T13:00:51.773Z',
        updatedAt: '2023-09-24T13:00:51.773Z',
        __v: 0,
      },
      {
        _id: '651033310cdcce620102356e',
        title: 'Çocuk',
        author: 'Cengiz Bahadır',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 238,
        rating: 5.8,
        createdAt: '2023-09-24T13:01:37.184Z',
        updatedAt: '2023-09-24T13:01:37.184Z',
        __v: 0,
      },
      {
        _id: '6510334b0cdcce6201023571',
        title: 'Sırça Köşk',
        author: 'Sabahattin Ali',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 124,
        rating: 6.9,
        createdAt: '2023-09-24T13:02:03.021Z',
        updatedAt: '2023-09-24T13:02:03.021Z',
        __v: 0,
      },
      {
        _id: '651033790cdcce6201023574',
        title: 'Özgürlük',
        author: 'Zygmunt Bauman',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 168,
        rating: 5.4,
        createdAt: '2023-09-24T13:02:49.581Z',
        updatedAt: '2023-09-24T13:02:49.581Z',
        __v: 0,
      },
      {
        _id: '6510338e0cdcce6201023577',
        title: 'Cereyanlar',
        author: 'Tanıl Bora',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 683,
        rating: 8.8,
        createdAt: '2023-09-24T13:03:10.084Z',
        updatedAt: '2023-09-24T13:03:10.084Z',
        __v: 0,
      },
      {
        _id: '651033c30cdcce620102357a',
        title: 'Özgürlük Yanılsaması',
        author: 'Yıldız Silier',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pageNumber: 222,
        rating: 7.2,
        createdAt: '2023-09-24T13:04:03.008Z',
        updatedAt: '2023-09-24T13:04:03.008Z',
        __v: 0,
      },
    ],
  }),
});
