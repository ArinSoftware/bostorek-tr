const getAllBooks = (req, res) => {
  const books = [
    {
      id: 1,
      name: '13 Numaralı Oda',
    },
    {
      id: 2,
      name: 'Cinayet Defteri 2',
    },
  ];

  res.json(books);
};

export { getAllBooks };
