import React, { useState } from 'react';
import { Upload, FileText, Shield } from 'lucide-react';

export function UploadRecord() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [accessLevel, setAccessLevel] = useState('private');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setUploading(true);
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('File uploaded:', selectedFile.name, 'Access Level:', accessLevel);
      setSelectedFile(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Upload Health Record</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 transition-colors duration-200">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-12 h-12 text-emerald-500 mb-4" />
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF, DOC, DOCX, JPG up to 10MB
              </p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.jpg,.jpeg"
            />
          </label>
        </div>

        {selectedFile && (
          <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-300">{selectedFile.name}</span>
            </div>
            <Shield className="w-5 h-5 text-emerald-500" />
          </div>
        )}

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            Access Level
          </label>
          <select
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="private">Private</option>
            <option value="specific">Specific Providers</option>
            <option value="public">All Authorized Providers</option>
          </select>
        </div>

        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
            uploading || !selectedFile
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:shadow-lg'
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload Record'}
        </button>
      </div>
    </div>
  );
}