# Hope UI Pro File Manager Clone

A React + Vite implementation of a Hope UI Pro-inspired file manager dashboard. The project recreates the main dashboard shell, sidebar navigation, top navigation controls, file cards, storage widgets, image preview modal, and dedicated file pages for images, videos, documents, all files, trash, help, and sign out.

## Project Goal

The goal is to convert the original plain CSS approach into Tailwind CSS while keeping the visual language close to Hope UI Pro:

- White dashboard surface with soft gray page background
- Blue primary actions and active states
- Left sidebar with grouped navigation
- Topbar with breadcrumbs, search, profile, notifications, cart, fullscreen, and font-size controls
- Card-based file views for every sidebar page
- Local React state interactions for a realistic front-end demo

## Tech Stack

- React 19 with Vite
- React Router for sidebar routes
- React Context + `useReducer` for shared image/search route state
- Local `useState` for page interactions
- Tailwind CSS utility classes for layout and styling
- `react-icons` for Hope UI-style icons

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Main Features

- Dashboard overview with folder cards, storage details, activity chart, upload progress list, recently added files, cloud storage, upgrade card, and footer links
- Collapsible sidebar that becomes an icon-only rail instead of disappearing
- Sidebar arrow changes direction when the sidebar is collapsed or expanded
- Topbar font-size controls:
  - Small `A` sets the app font size to `14px`
  - Middle `A` sets the app font size to `16px`
  - Large `A` sets the app font size to `18px`
- Font-size setting applies across routed pages because it updates the root document font size
- Scrollbars are visually hidden across the app while scroll behavior still works at every font size
- Global search term shared through context
- Image folder with local Add Image state and preview modal
- Video folder with local Add Video state
- Document folder with local Add Document state
- All Files page with document and image sections plus local Add Files state
- Trash page with Restore All and individual document restore behavior
- Help and Sign Out routes use the same dashboard shell and card structure

## Routes

- `/file-manager/dashboard` - main dashboard overview
- `/file-manager/images` - image cards, search, add image, preview modal
- `/file-manager/videos` - video cards and add video action
- `/file-manager/documents` - document cards and add document action
- `/file-manager/all-files` - combined document and image sections
- `/file-manager/trash` - deleted files with restore interactions
- `/help` - support/help card layout
- `/sign-out` - sign-out/account card layout

The root route `/` redirects to `/file-manager/dashboard`.

## State Management

Shared state lives in `ImageContext`:

- `activeRoute`
- `searchTerm`
- `previewImageId`
- image library data
- derived filtered images
- derived recently viewed images

The reducer in `ImageContext.jsx` handles shared actions:

- `setSearchTerm`
- `setActiveRoute`
- `openPreview`
- `closePreview`

Local `useState` is used where the behavior belongs to one screen:

- `AppLayout.jsx` stores sidebar collapsed state and selected font size
- `ImageFolderPage.jsx` stores newly added image cards and local preview state
- `VideoFolderPage.jsx` stores added video cards
- `DocumentFolderPage.jsx` stores added document cards
- `AllFilesPage.jsx` stores added document and image cards
- `TrashPage.jsx` stores trash contents and restored item count

This split keeps shared UI state centralized while keeping page-only demo interactions simple.

## Tailwind Conversion

The app now uses Tailwind utility classes directly in JSX instead of plain CSS selectors. The Tailwind entry file is:

```text
src/index.css
```

It imports Tailwind with:

```css
@import "tailwindcss";
```

It also includes global scrollbar-hiding rules so dashboard and sidebar scroll areas remain visually clean while still supporting mouse wheel, trackpad, and touch scrolling.

Examples of converted styling:

- Layout: `flex`, `grid`, `h-screen`, `overflow-hidden`
- Cards: `rounded`, `bg-white`, `shadow-[...]`, `p-4`
- Active states: `text-[#4355e8]`, `bg-[#4355e8]`
- Responsive grids: `sm:grid-cols-2`, `xl:grid-cols-4`
- Sidebar transitions: `transition-[width]`, `duration-300`

## Important Components

- `AppLayout.jsx` - main shell, sidebar state, font-size state, floating right tabs
- `Sidebar.jsx` - grouped navigation and icon-only collapsed mode
- `Navbar.jsx` - sidebar toggle, breadcrumbs, search, font controls, dropdowns
- `FolderCard.jsx` - dashboard folder cards
- `FilePageHeader.jsx` - reusable page title and action button
- `MediaFileCard.jsx` - image/video style file cards
- `DocumentFileCard.jsx` - PDF, Word, Excel, and PowerPoint style cards
- `ImageCard.jsx` - image gallery card
- `ImagePreviewModal.jsx` - image preview dialog

## Presentation Notes

When presenting, a good flow is:

1. Start on the dashboard and explain the Hope UI Pro-inspired layout.
2. Point out that the project was converted from plain CSS to Tailwind utility classes.
3. Collapse the sidebar and show that the navigation icons remain visible.
4. Click the sidebar arrow again to expand it and show the direction changes.
5. Use the three A buttons in the topbar to switch between 14px, 16px, and 18px app font sizes.
6. Use the search box to filter image, video, document, or all-file cards.
7. Visit Images and click Add Image to show local `useState` adding a new card.
8. Click an image card to show the preview modal.
9. Visit Videos, Documents, and All Files to show route-specific card layouts.
10. Visit Trash and click Restore All to show stateful restore behavior.

## Known Limitations

- Data is local mock data, not connected to a backend.
- Add and restore actions update local React state only.
- Authentication and real sign-out behavior are not implemented.
- Remote Unsplash images are used for mock gallery and media cards.
