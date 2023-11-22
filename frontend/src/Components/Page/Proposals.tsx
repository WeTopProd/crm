import React from 'react'

interface InfoItem {
    _id: number;
    index: number;
    name: string;
    email: string;
    phone: string;
    invite: string;
    resit: string;
}

const items= [
    {
        titel:'Скидка 10%',
        info: 'На день рождения',
        picture:''
    },
    {
        titel:'',
        info: '',
        picture:''
    },
    {
        titel:'',
        info: '',
        picture:''
    },
    
]
const Proposals = () => {
  return (
    <div>
        {items.map((item,id) => (
        <div>
            <img src=''/>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
        ))} 
      
    </div>
  )
}

export {Proposals}
