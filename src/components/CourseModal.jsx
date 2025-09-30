import { useState, useEffect } from "react";

function CourseModal({ isOpen, onClose, onSave, initialData }) {
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    avatar: "",
    name: "",
    role: "",
    company: "",
    rating: 0,
    review: 0,
    price: "",
  });

  // mode input (url / upload)
  const [imageMode, setImageMode] = useState("url");
  const [avatarMode, setAvatarMode] = useState("url");

  // initial data
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        image: "",
        title: "",
        description: "",
        avatar: "",
        name: "",
        role: "",
        company: "",
        rating: 0,
        review: 0,
        price: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // buat preview
      setForm({ ...form, [field]: url });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Update Course" : "Create Course"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2"
        >
          <p>Title</p>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-2 rounded"
            required
          />
          <p>Description</p>
          <textarea
            name="description"
            value={form.desc}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded min-h-32"
            rows="3"
          />

          {/* Image field */}
          <p>Image</p>
          <div className="flex gap-4 mb-2">
            <label>
              <input
                type="radio"
                checked={imageMode === "url"}
                onChange={() => setImageMode("url")}
              />{" "}
              URL
            </label>
            <label>
              <input
                type="radio"
                checked={imageMode === "upload"}
                onChange={() => setImageMode("upload")}
              />{" "}
              Upload
            </label>
          </div>
          {imageMode === "url" ? (
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-2 rounded"
            />
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "image")}
              className="border p-2 rounded"
            />
          )}
          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="w-32 h-20 object-cover mt-2 rounded"
            />
          )}

          {/* Avatar field */}
          <p>Avatar</p>
          <div className="flex gap-4 mb-2">
            <label>
              <input
                type="radio"
                checked={avatarMode === "url"}
                onChange={() => setAvatarMode("url")}
              />{" "}
              URL
            </label>
            <label>
              <input
                type="radio"
                checked={avatarMode === "upload"}
                onChange={() => setAvatarMode("upload")}
              />{" "}
              Upload
            </label>
          </div>
          {avatarMode === "url" ? (
            <input
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="Avatar URL"
              className="border p-2 rounded"
            />
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "avatar")}
              className="border p-2 rounded"
            />
          )}
          {form.avatar && (
            <img
              src={form.avatar}
              alt="preview"
              className="w-16 h-16 object-cover mt-2 rounded-full"
            />
          )}

          <p>Nama</p>
          <input
            name="name"
            value={form.instructor}
            onChange={handleChange}
            placeholder="Instructor Name"
            className="border p-2 rounded"
          />
          <p>Pekerjaan</p>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="border p-2 rounded"
          />
          <p>Perusahaan</p>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="border p-2 rounded"
          />
          <p>Rating</p>
          <input
            name="rating"
            type="number"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="border p-2 rounded"
          />
          <p>Review</p>
          <input
            name="review"
            type="number"
            value={form.reviews}
            onChange={handleChange}
            placeholder="Review Count"
            className="border p-2 rounded"
          />
          <p>Harga</p>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded"
          />

          {/* tombol */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseModal;
