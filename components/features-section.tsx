import React from 'react'

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our solution stand out from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
            <p className="text-muted-foreground">
              Description of feature 1 and how it benefits users.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
            <p className="text-muted-foreground">
              Description of feature 2 and how it benefits users.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
            <p className="text-muted-foreground">
              Description of feature 3 and how it benefits users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}