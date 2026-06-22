import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { ImageProvider } from './context/ImageContext'
import { AllFilesPage } from './pages/AllFilesPage'
import { DashboardPage } from './pages/DashboardPage'
import { DocumentFolderPage } from './pages/DocumentFolderPage'
import { ImageFolderPage } from './pages/ImageFolderPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { TrashPage } from './pages/TrashPage'
import { VideoFolderPage } from './pages/VideoFolderPage'

function App() {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/file-manager/dashboard" replace />} />
            <Route path="/file-manager/dashboard" element={<DashboardPage />} />
            <Route path="/file-manager/images" element={<ImageFolderPage />} />
            <Route path="/file-manager/videos" element={<VideoFolderPage />} />
            <Route path="/file-manager/documents" element={<DocumentFolderPage />} />
            <Route path="/file-manager/all-files" element={<AllFilesPage />} />
            <Route path="/file-manager/trash" element={<TrashPage />} />
            <Route
              path="/help"
              element={
                <PlaceholderPage
                  title="Help"
                  description="Support resources, storage tips, and quick account guidance."
                  variant="help"
                />
              }
            />
            <Route
              path="/sign-out"
              element={
                <PlaceholderPage
                  title="Sign Out"
                  description="Review active sessions and account access before leaving."
                  variant="sign-out"
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </ImageProvider>
  )
}

export default App
