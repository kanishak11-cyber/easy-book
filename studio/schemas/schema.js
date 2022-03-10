import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'heritage',
      title: 'Heritage',
      type: 'document',
      fields: [
        {
          name:'placeId',
          title:'Place Id',
          type:'string',
        },
        {
          name:'placeName',
          title:'Place Name',
          type:'string',
        },
        {
          name:'placeDescription',
          title:'Place Description',
          type:'string',
        },
        {
          name:'placeImage',
          title:'Place Image',
          type:'image',
        },
        {
          name:'state',
          title:'State',
          type:'string',
        },
        {
          name:'country',
          title:'Country',
          type:'string',
        },
        {
          name:'city',
          title:'City',
          type:'string',
        },
        {
          name:'tnt',
          title:'total number of ticket',
          type:'number',
        },
      ],
    },
    {
      name:'user',
      title:'User',
      type:'document',
      fields:[
        {
          name:'userid',
          title:'User Id',
          type:'string',
        },
        {
          name:'username',
          title:'User Name',
          type:'string',
        },
        {
          name:'email',
          title:'Email',
          type:'string',
        },
        {
          name:'password',
          title:'Password',
          type:'string',
        },
        {
          name:'phone',
          title:'Phone',
          type:'number',
        },
        {
          name:'address',
          title:'Address',
          type:'string',
        },
        {
          name:'tickets',
          title:'Tickets',
          type:'number',
        },
      ],
    },
    {
      name:'ticket',
      title:'Ticket',
      type:'document',
      fields:[
        {
          name:'ticketid',
          title:'Ticket Id',
          type:'string',
        },
        {
          name:'people',
          title:'People',
          type:'number',
        },
        {
          name:'placeId',
          title:'Place Id',
          type:'reference',
          to:[{type:'heritage'}],
        },
        {
          name:'userid',
          title:'User Id',
          type:'reference',
          to:[{type:'user'}],
        }
      ] 
    }
    
  ]),
})
