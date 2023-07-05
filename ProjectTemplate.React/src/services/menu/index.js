export default async function getMenuData() {
  return [
    // VB:REPLACE-START:MENU-CONFIG
    {
      title: 'Dashboard',
      key: '__dashboard',
      url: '/dashboard',
      icon: 'fe fe-home',
    },
    {
      title: 'Settings',
      key: '__settings',
      icon: 'fe fe-settings',
      children:[
        {
          title: 'Users',
          key: '__users',
          url: '/user',
          icon: 'fe fe-users',
        },
        {
          title: 'Child 1',
          key: '__child1',
          url: '/child1',
          icon: 'fe fe-book-open',
        },
      ]
    },
    {
      title: 'Parent 1',
      key: '__parent1',
      icon: 'fe fe-settings',
      children:[
        {
          title: 'Child 1',
          key: '__child1',
          url: '/child1',
          icon: 'fe fe-book-open',
        },
        {
          title: 'Child 2',
          key: '__child2',
          url: '/child2',
          icon: 'fe fe-book-open',
        },
      ]
    },
    {
      title: 'Parent 2',
      key: '__parent2',
      icon: 'fe fe-settings',
      children:[
        {
          title: 'Child 1',
          key: '__child1',
          url: '/child1',
          icon: 'fe fe-book-open',
        },
        {
          title: 'Child 2',
          key: '__child2',
          url: '/child2',
          icon: 'fe fe-book-open',
        },
      ]
    },
    {
      title: 'Parent 3',
      key: '__parent3',
      icon: 'fe fe-settings',
      children:[
        {
          title: 'Child 1',
          key: '__child1',
          url: '/child1',
          icon: 'fe fe-book-open',
        },
        {
          title: 'Child 2',
          key: '__child2',
          url: '/child2',
          icon: 'fe fe-book-open',
        },
      ]
    },
    // VB:REPLACE-END:MENU-CONFIG
  ]
}
