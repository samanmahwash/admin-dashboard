export const statCards = [
  { id: 1, title: 'Total Users', value: '25,430', growth: '+12%', trend: 'up', icon: 'Users', color: '#9B87F0' },
  { id: 2, title: 'Total Revenue', value: '$84,520', growth: '+8%', trend: 'up', icon: 'DollarSign', color: '#7FD9C4' },
  { id: 3, title: 'Total Orders', value: '12,340', growth: '+15%', trend: 'up', icon: 'ShoppingCart', color: '#F5A9C6' },
  { id: 4, title: 'Active Visitors', value: '3,250', growth: 'Live', trend: 'live', icon: 'Activity', color: '#FBCB7A' },
]

export const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5100 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6300 },
  { month: 'May', revenue: 7200 },
  { month: 'Jun', revenue: 6800 },
  { month: 'Jul', revenue: 8100 },
  { month: 'Aug', revenue: 7600 },
  { month: 'Sep', revenue: 8900 },
  { month: 'Oct', revenue: 9400 },
  { month: 'Nov', revenue: 10200 },
  { month: 'Dec', revenue: 11500 },
]

export const userGrowthData = [
  { month: 'Jan', users: 820 },
  { month: 'Feb', users: 932 },
  { month: 'Mar', users: 1100 },
  { month: 'Apr', users: 980 },
  { month: 'May', users: 1290 },
  { month: 'Jun', users: 1450 },
  { month: 'Jul', users: 1620 },
]

export const salesDistribution = [
  { name: 'Electronics', value: 38, color: '#9B87F0' },
  { name: 'Fashion', value: 27, color: '#F5A9C6' },
  { name: 'Home & Living', value: 19, color: '#7FD9C4' },
  { name: 'Beauty', value: 16, color: '#FBCB7A' },
]

const names = [
  'Amelia Carter', 'Noah Bennett', 'Sofia Ramirez', 'Liam Johnson', 'Ava Patel',
  'Mason Clarke', 'Isabella Kim', 'Ethan Novak', 'Mia Torres', 'Lucas Meyer',
  'Chloe Dubois', 'Jack Whitfield',
]
const roles = ['Admin', 'Editor', 'Viewer', 'Manager']
const statuses = ['active', 'pending', 'inactive']

export const users = names.map((name, i) => ({
  id: i + 1,
  name,
  email: `${name.toLowerCase().replace(' ', '.')}@pulsemail.com`,
  role: roles[i % roles.length],
  status: statuses[i % statuses.length],
  initials: name.split(' ').map((n) => n[0]).join(''),
}))

export const recentActivity = [
  { id: 1, text: 'Updated profile picture', time: '2 hours ago' },
  { id: 2, text: 'Changed password', time: '1 day ago' },
  { id: 3, text: 'Logged in from new device', time: '3 days ago' },
  { id: 4, text: 'Completed onboarding', time: '1 week ago' },
]
