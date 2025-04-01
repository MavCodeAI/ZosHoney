
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Search, 
  Eye, 
  Download,
  Filter
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import OrderTracker from '@/components/OrderTracker';

type OrderStatus = 'processing' | 'shipped' | 'completed' | 'cancelled';

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: number;
}

// Mock order data with proper typing
const mockOrders: Order[] = [
  { id: '1001', customer: 'John Smith', date: '2023-11-12', total: 129.99, status: 'completed', items: 3 },
  { id: '1002', customer: 'Sarah Johnson', date: '2023-11-11', total: 79.50, status: 'processing', items: 2 },
  { id: '1003', customer: 'Michael Brown', date: '2023-11-10', total: 55.25, status: 'completed', items: 1 },
  { id: '1004', customer: 'Emily Davis', date: '2023-11-09', total: 210.75, status: 'shipped', items: 4 },
  { id: '1005', customer: 'David Wilson', date: '2023-11-08', total: 45.00, status: 'cancelled', items: 1 },
  { id: '1006', customer: 'Jessica Martinez', date: '2023-11-07', total: 132.50, status: 'completed', items: 3 },
  { id: '1007', customer: 'Thomas Anderson', date: '2023-11-06', total: 88.99, status: 'processing', items: 2 },
  { id: '1008', customer: 'Lisa Rodriguez', date: '2023-11-05', total: 67.25, status: 'shipped', items: 2 },
];

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case 'processing':
      return 'bg-blue-500';
    case 'shipped':
      return 'bg-yellow-500';
    case 'completed':
      return 'bg-green-500';
    case 'cancelled':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

// Mock order details for the order detail view
const mockOrderItems = [
  { id: 'prod1', name: 'Pakistani Sidr Honey', price: 45.99, quantity: 1, total: 45.99 },
  { id: 'prod2', name: 'Manuka Honey', price: 38.50, quantity: 2, total: 77.00 },
  { id: 'prod3', name: 'Raw Forest Honey', price: 22.50, quantity: 1, total: 22.50 },
];

// Mock customer info
const mockCustomerInfo = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, Anytown, CA 12345',
};

const AdminOrders: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.includes(searchTerm) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={16} />
          Export
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input 
            placeholder="Search orders by ID or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="sm:flex-0">
          <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          <Button 
            variant={statusFilter === 'all' ? 'default' : 'outline'} 
            onClick={() => setStatusFilter('all')}
            size="sm"
          >
            All
          </Button>
          <Button 
            variant={statusFilter === 'processing' ? 'default' : 'outline'} 
            onClick={() => setStatusFilter('processing')}
            size="sm"
            className={statusFilter === 'processing' ? 'bg-blue-500 hover:bg-blue-600' : ''}
          >
            Processing
          </Button>
          <Button 
            variant={statusFilter === 'shipped' ? 'default' : 'outline'} 
            onClick={() => setStatusFilter('shipped')}
            size="sm"
            className={statusFilter === 'shipped' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
          >
            Shipped
          </Button>
          <Button 
            variant={statusFilter === 'completed' ? 'default' : 'outline'} 
            onClick={() => setStatusFilter('completed')}
            size="sm"
            className={statusFilter === 'completed' ? 'bg-green-500 hover:bg-green-600' : ''}
          >
            Completed
          </Button>
          <Button 
            variant={statusFilter === 'cancelled' ? 'default' : 'outline'} 
            onClick={() => setStatusFilter('cancelled')}
            size="sm"
            className={statusFilter === 'cancelled' ? 'bg-red-500 hover:bg-red-600' : ''}
          >
            Cancelled
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleViewOrder(order)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Order #{order.id}</DialogTitle>
                        <DialogDescription>
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-4">
                        <OrderTracker 
                          status={order.status === 'completed' ? 'delivered' : order.status === 'shipped' ? 'shipped' : 'processing'} 
                          className="mb-6"
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card>
                            <CardContent className="p-4">
                              <h3 className="font-semibold mb-2">Customer Information</h3>
                              <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">Name:</span> {mockCustomerInfo.name}</p>
                                <p><span className="text-gray-500">Email:</span> {mockCustomerInfo.email}</p>
                                <p><span className="text-gray-500">Phone:</span> {mockCustomerInfo.phone}</p>
                                <p><span className="text-gray-500">Address:</span> {mockCustomerInfo.address}</p>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-4">
                              <h3 className="font-semibold mb-2">Order Summary</h3>
                              <div className="space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Subtotal:</span>
                                  <span>${(order.total - 10).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Shipping:</span>
                                  <span>$10.00</span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between font-semibold">
                                  <span>Total:</span>
                                  <span>${order.total.toFixed(2)}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold mb-3">Order Items</h3>
                          <div className="overflow-hidden rounded-md border">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Product</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Quantity</TableHead>
                                  <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {mockOrderItems.map((item) => (
                                  <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
            
            {filteredOrders.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminOrders;
