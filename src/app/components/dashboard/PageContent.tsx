import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface PageContentProps {
  title: string;
  description: string;
}

export function PageContent({ title, description }: PageContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardHeader>
          <CardTitle className="text-foreground">Content Area</CardTitle>
          <CardDescription className="text-muted-foreground">
            This is a placeholder for the {title.toLowerCase()} content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Add your custom content here. This template provides a flexible layout that can be
              adapted for different sections of your application.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-[#232323] border-[#383838]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Item {i}</p>
                        <p className="text-sm text-muted-foreground">Sample data</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-[#383838] flex items-center justify-center">
                        <span className="text-sm font-semibold text-foreground">{i}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}