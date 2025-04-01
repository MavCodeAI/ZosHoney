import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBasket, Package, Settings, LogOut, Palette } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAdmin();
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Products', icon: Package, path: '/admin/products' },
    { name: 'Orders', icon: ShoppingBasket, path: '/admin/orders' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
    { name: 'Customize', icon: Palette, path: '/admin/customize' },
  ];
  
  return (
    <div className="min-h-screen w-64 bg-slate-900 text-white">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-xl font-semibold">Honey Admin</h2>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={`flex items-center px-4 py-3 hover:bg-slate-800 transition-colors ${
                    isActive ? 'bg-slate-800 border-l-4 border-primary-gold' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
          
          <li className="px-4 pt-6">
            <button 
              onClick={logout}
              className="flex items-center px-4 py-3 w-full text-left hover:bg-slate-800 transition-colors text-red-400"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
