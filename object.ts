type TypeUser={
    name: string
    age: number
    id: string
  }
  
  let user: TypeUser
  
  user={
      name: 'Alim',
      age: 29,
      id: 'Gagarina'
  }
  
  type TypeAdress={
      adress: string
  }
  
  let idree: TypeAdress={
    adress: 'Minor'
  }
  
  let common: TypeAdress & TypeUser
  
   common={
      ...user,
      ...idree
  }
  