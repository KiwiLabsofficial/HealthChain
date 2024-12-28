import React from 'react';
import { useWallet } from '../lib/store';
import { Upload, Shield, History } from 'lucide-react';

export function Demo() {
  const { isWalletConnected, connectWallet } = useWallet();
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!isWalletConnected) {
      await connectWallet();
      return;
    }
    
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    // Here we would implement the actual file upload to Hedera
    console.log('Uploading file:', selectedFile.name);
  };

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of health record management
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 transition-colors duration-200">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 text-emerald-500 mb-4" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>

            {selectedFile && (
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                <span className="text-gray-300">{selectedFile.name}</span>
                <Shield className="w-5 h-5 text-emerald-500" />
              </div>
            )}

            <button
              onClick={handleUpload}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              {isWalletConnected ? 'Upload Health Record' : 'Connect Wallet to Upload'}
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <History className="w-4 h-4" />
              <span>All uploads are encrypted and secured on Hedera</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}