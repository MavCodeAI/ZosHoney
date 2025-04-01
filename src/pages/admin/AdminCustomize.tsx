import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GripVertical, Plus, X, Settings } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { updateSettings } from '@/store/slices/websiteSlice';
import { toast } from 'sonner';

interface Section {
  id: string;
  title: string;
  enabled: boolean;
  settings?: Record<string, any>;
}

const AdminCustomize = () => {
  const dispatch = useDispatch();
  const { settings, loading } = useSelector((state: RootState) => state.website);
  
  const [sections, setSections] = useState<Section[]>([
    { 
      id: 'hero',
      title: 'Hero Section',
      enabled: true,
      settings: {
        showButton: true,
        buttonText: 'Shop Now',
        backgroundColor: '#f3f4f6'
      }
    },
    {
      id: 'featured',
      title: 'Featured Products',
      enabled: true,
      settings: {
        productsToShow: 4,
        showPrices: true
      }
    },
    {
      id: 'categories',
      title: 'Categories',
      enabled: true,
      settings: {
        layout: 'grid',
        columnsCount: 3
      }
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      enabled: false,
      settings: {
        autoplay: true,
        interval: 5000
      }
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      enabled: true,
      settings: {
        backgroundColor: '#f8fafc',
        showImage: true
      }
    }
  ]);

  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setSections(items);
    saveChanges(items);
  };

  const saveChanges = async (updatedSections: Section[]) => {
    try {
      await dispatch(updateSettings({ sections: updatedSections } as any)).unwrap();
      toast.success('Layout updated successfully');
    } catch (error) {
      toast.error('Failed to update layout');
    }
  };

  const handleAddSection = () => {
    if (!newSectionTitle) return;
    
    const newSection: Section = {
      id: `section-${Date.now()}`,
      title: newSectionTitle,
      enabled: true,
      settings: {}
    };
    
    setSections([...sections, newSection]);
    setNewSectionTitle('');
    setIsAddSectionOpen(false);
    saveChanges([...sections, newSection]);
  };

  const handleRemoveSection = (id: string) => {
    const updatedSections = sections.filter(section => section.id !== id);
    setSections(updatedSections);
    saveChanges(updatedSections);
  };

  const handleUpdateSectionSettings = (sectionId: string, newSettings: Record<string, any>) => {
    const updatedSections = sections.map(section => 
      section.id === sectionId 
        ? { ...section, settings: { ...section.settings, ...newSettings } }
        : section
    );
    setSections(updatedSections);
    saveChanges(updatedSections);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customize Homepage</h1>
        <Dialog open={isAddSectionOpen} onOpenChange={setIsAddSectionOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary-gold hover:bg-primary-gold/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Section</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Section Title</Label>
                <Input
                  value={newSectionTitle}
                  onChange={(e) => setNewSectionTitle(e.target.value)}
                  placeholder="Enter section title..."
                />
              </div>
              <Button 
                onClick={handleAddSection}
                className="w-full bg-primary-gold hover:bg-primary-gold/90"
              >
                Add Section
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {sections.map((section, index) => (
                <Draggable 
                  key={section.id} 
                  draggableId={section.id} 
                  index={index}
                >
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="p-4 bg-white"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div {...provided.dragHandleProps}>
                            <GripVertical className="text-gray-400 cursor-move" />
                          </div>
                          <h3 className="font-medium">{section.title}</h3>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={section.enabled}
                              onCheckedChange={(checked) => {
                                const updatedSections = sections.map(s => 
                                  s.id === section.id ? { ...s, enabled: checked } : s
                                );
                                setSections(updatedSections);
                                saveChanges(updatedSections);
                              }}
                            />
                            <span className="text-sm text-gray-500">
                              {section.enabled ? 'Enabled' : 'Disabled'}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedSection(section);
                              setIsSettingsOpen(true);
                            }}
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleRemoveSection(section.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Section Settings: {selectedSection?.title}</DialogTitle>
          </DialogHeader>
          {selectedSection && (
            <div className="space-y-4 py-4">
              {Object.entries(selectedSection.settings || {}).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  {typeof value === 'boolean' ? (
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => {
                        handleUpdateSectionSettings(selectedSection.id, {
                          [key]: checked
                        });
                      }}
                    />
                  ) : typeof value === 'number' ? (
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => {
                        handleUpdateSectionSettings(selectedSection.id, {
                          [key]: parseInt(e.target.value)
                        });
                      }}
                    />
                  ) : (
                    <Input
                      value={value}
                      onChange={(e) => {
                        handleUpdateSectionSettings(selectedSection.id, {
                          [key]: e.target.value
                        });
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCustomize; 