
import React from 'react';
import { Check, Clock, Truck, Package, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderTrackerProps {
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  className?: string;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ status, className }) => {
  const steps = [
    { key: 'pending', label: 'Order Placed', icon: Clock },
    { key: 'processing', label: 'Processing', icon: Package },
    { key: 'shipped', label: 'Shipped', icon: Truck },
    { key: 'delivered', label: 'Delivered', icon: Check },
  ];
  
  // Find the current step index
  const currentStepIndex = steps.findIndex(step => step.key === status);
  
  // Handle cancelled orders
  if (status === 'cancelled') {
    return (
      <div className={cn("flex flex-col items-center p-4", className)}>
        <div className="bg-red-100 p-3 rounded-full mb-2">
          <AlertCircle className="h-6 w-6 text-red-500" />
        </div>
        <span className="text-sm font-medium text-red-500">Order Cancelled</span>
      </div>
    );
  }
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          return (
            <React.Fragment key={step.key}>
              {/* Step marker */}
              <div className="flex flex-col items-center">
                <div className={cn(
                  "rounded-full p-2 flex items-center justify-center",
                  isActive 
                    ? isCompleted 
                      ? "bg-green-100 text-green-500" 
                      : "bg-primary-gold/20 text-primary-gold"
                    : "bg-gray-100 text-gray-400"
                )}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={cn(
                  "text-xs mt-2 text-center",
                  isActive ? "font-medium" : "text-gray-500"
                )}>
                  {step.label}
                </span>
              </div>
              
              {/* Connector line (except after last step) */}
              {index < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-0.5 max-w-20",
                  index < currentStepIndex ? "bg-primary-gold" : "bg-gray-200"
                )} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;
