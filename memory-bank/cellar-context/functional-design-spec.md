# Basketball & Wine Blog: Functional and Design Specification

## Wine Explorer Page

### Functionality
- Displays a chronological list of all wine vintages tried, sorted by date tried (newest first)
- Each list item shows:
  - Wine name (vintage year + wine name)
  - Producer information
  - Number of vintages tried from that producer
  - Date tried
- Each wine name functions as a link to its detail page
- No pagination, filtering, or search functionality in initial implementation

### Design Considerations
- Alternating background colors for list items to improve readability
- Wine names styled distinctly (color, weight) to indicate they are clickable
- Clean, consistent spacing for easy scanning
- Clean typography with clear hierarchy (wine name as primary info)
- Subtle borders and rounded corners for a modern feel
- Responsive layout that adapts to different screen sizes
- Wine blocks styled in dark purple to evoke wine bottles in a cellar

## Wine Detail Page

### Functionality
- Two-step experience for wines with multiple vintages:
  1. Initial landing shows vintage selection buttons
  2. After selection, shows detailed vintage information with tabbed navigation
- For single-vintage wines, skips directly to the detail view
- Vintage detail view includes:
  - Bottle image
  - Cepage (grape composition)
  - Tasting notes
  - Date tried
- Tabbed navigation for switching between vintages
- Back link to return to Wine Explorer

### Design Considerations
- Large, distinctive vintage selection buttons in initial view
- Tabbed interface for easy switching between vintages
- Two-column layout in detail view (image left, information right)
- Purple-themed headers and tabs to maintain wine bottle aesthetic
- Responsive design that collapses to single column on mobile
- Consistent navigation pattern with Wine Explorer
- Clear focus on vintage information
- Smooth transitions between views

## Producer List and Map Views

### Functionality
- Tabbed interface with two views:
  1. List View (default): Text-based list of all producers
  2. Map View: Geographic representation of producer locations
- List items/map pins link to Producer Detail page
- Each producer list item displays:
  - Producer name (as link)
  - Location information
  - Number of wines tried
- Map view features:
  - Interactive pins for each producer
  - Hover cards showing producer information
  - Clustering for dense wine regions
  - Zoom controls for navigation
  - Pin click leads to Producer Detail

### Design Considerations
- Tab-based navigation for switching between views
- Consistent header information across both views
- Producer names styled distinctly to indicate they are clickable
- Map implemented with Leaflet.js for simplicity and performance
- Custom pin styling to match wine theme
- Hover card design that doesn't obstruct map
- Responsive design approaches for both list and map
- Clear visual distinction between active and inactive tabs

## Producer Detail Page

### Functionality
- Displays comprehensive information about a specific producer:
  - Producer name and location
  - Website link if available
  - Small map showing specific location
  - List of wines tried from this producer
- Each wine entry shows:
  - Wine name (as link to Wine Detail)
  - List of vintages tried for that wine
- Back link to return to producer list/map

### Design Considerations
- Two-column layout (location map left, wines list right)
- Wine names styled distinctly to indicate they are clickable
- Clean typography with clear hierarchy
- Consistent styling with other pages
- Responsive design that adapts to different screen sizes
- Single back navigation link for simplicity
