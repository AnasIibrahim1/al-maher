# BlogData Folder

This folder contains all blog-related data and functionality.

## Structure:

### `blogPosts.js`
Contains all blog-related data:
- **blogPosts**: Array of blog post objects with complete information
- **categories**: Available blog categories
- **Helper functions**:
  - `getBlogPostById(id)`: Get a specific blog post by ID
  - `getBlogPostsByCategory(category)`: Get all posts in a category
  - `getRelatedPosts(currentId, limit)`: Get related posts based on category/tags

## Blog Post Structure:
```javascript
{
  id: number,
  title: string,
  category: string,
  date: Date,
  image: string,
  author: string,
  readTime: string,
  description: string,
  tags: array
}
```

## Usage Examples:

```javascript
// Import blog data
import { blogPosts, getBlogPostById } from '@/BlogData/blogPosts';

// Get specific blog post
const post = getBlogPostById(1);

// Get all blog posts
const allPosts = blogPosts;

// Get related posts
const related = getRelatedPosts(1, 3);
```

## Features:
- ✅ **6 complete blog posts** with all details
- ✅ **5 categories** (تطوير، تصميم، ذكاء اصطناعي، أمان، أداء)
- ✅ **Helper functions** for data manipulation
- ✅ **Type-safe data structure**
- ✅ **Easy to extend** with more posts
- ✅ **Independent from other app data**

## Blog Details Features:
- ✅ **Blog image** display
- ✅ **Blog name/title**
- ✅ **Category** with color coding
- ✅ **Date** with proper formatting
- ✅ **Author information** with avatar
- ✅ **Read time** estimation
- ✅ **Full description** with proper formatting
- ✅ **Action buttons** (print, share)
- ✅ **Responsive design** for all screen sizes
