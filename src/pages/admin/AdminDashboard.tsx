
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Package, DollarSign, Users } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: 'Total Sales', value: '$4,921', icon: DollarSign, change: '+12%', color: 'bg-green-500' },
    { title: 'Total Orders', value: '123', icon: ShoppingCart, change: '+8%', color: 'bg-blue-500' },
    { title: 'Products', value: '45', icon: Package, change: '+2', color: 'bg-purple-500' },
    { title: 'Customers', value: '512', icon: Users, change: '+32', color: 'bg-amber-500' },
  ];
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest 5 orders placed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((order) => (
                <div key={order} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <div className="font-medium">Order #{order}0321</div>
                    <div className="text-sm text-gray-500">Customer: John Doe</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${Math.floor(Math.random() * 100) + 20}</div>
                    <div className="text-sm text-gray-500">Today</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>Top selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Wildflower Honey', 'Manuka Honey', 'Raw Honey', 'Mountain Honey', 'Forest Honey'].map((product, i) => (
                <div key={product} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <div className="font-medium">{product}</div>
                    <div className="text-sm text-gray-500">{Math.floor(Math.random() * 50) + 10} sales</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${Math.floor(Math.random() * 30) + 10}</div>
                    <div className="text-sm text-gray-500">{90 - i * 10}% in stock</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
