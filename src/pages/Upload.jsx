import { useState } from "react";
import Card from "../components/Card";

const Upload = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!itemName || !itemDescription || !itemImage) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (itemImage.size > 5 * 1024 * 1024) {
      setErrorMessage("File size must be less than 5MB.");
      return;
    }

    const validFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFileTypes.includes(itemImage.type)) {
      setErrorMessage("Only image files (JPEG, PNG) are allowed.");
      return;
    }

    // Create item object to save
    const newItem = {
      name: itemName,
      description: itemDescription,
      category: "General", // You can add a category if needed
      image: URL.createObjectURL(itemImage),
    };

    // Save item in localStorage
    const savedItems = JSON.parse(localStorage.getItem('recycledItems')) || [];
    savedItems.push(newItem);
    localStorage.setItem('recycledItems', JSON.stringify(savedItems));

    setSuccessMessage("Your item has been uploaded successfully!");
    setItemName("");
    setItemDescription("");
    setItemImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setItemImage(file);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Upload Your Recyclable Items</h2>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-200 text-green-800 rounded-lg">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-200 text-red-800 rounded-lg">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter item name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="itemDescription">Item Description</label>
          <textarea
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter item description"
            rows="4"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="itemImage">Upload Item Image</label>
          <input
            type="file"
            id="itemImage"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {itemImage && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Image Preview</h3>
            <img src={URL.createObjectURL(itemImage)} alt="Item Preview" className="w-full h-48 object-cover rounded-lg" />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#FAFAC6] hover:bg-[#FAFAC6] border-2 border-[#1E3A2E] text-black py-3 px-6 rounded-xl text-lg transition-all duration-300"
        >
          Upload Item
        </button>
      </form>

      {/* Educational Cards Below Upload */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <Card 
          title="Why Recycle?" 
          description="Recycling helps conserve energy, reduce air and water pollution, and combat climate change." 
          icon="♻️" 
        />
        <Card 
          title="Accepted Items" 
          description="We accept plastic bottles, e-waste, paper, metals, and more. Upload a clear image!" 
          icon="📦" 
        />
        <Card 
          title="Earn Badges" 
          description="Consistent recyclers earn special badges and can track their streaks in the dashboard." 
          icon="🎖️" 
        />
      </div>
    </div>
  );
};

export default Upload;
