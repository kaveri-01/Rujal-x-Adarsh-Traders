import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => {
        const values = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...values, value]
            : values.filter((v) => v !== value),
        };
      });
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-5 h-fit sticky top-[100px]">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Filters</h2>

      {/* Gender */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Gender</h3>
        {["Men", "Women", "Kids", "Unisex"].map((g) => (
          <label key={g} className="block text-gray-600">
            <input
              type="checkbox"
              name="gender"
              value={g}
              checked={filters.gender.includes(g)}
              onChange={handleChange}
              className="mr-2"
            />
            {g}
          </label>
        ))}
      </div>

      {/* Fabric Type */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Fabric Type</h3>
        {["Cotton", "Linen", "Silk", "Velvet", "Wool", "Polyester"].map(
          (type) => (
            <label key={type} className="block text-gray-600">
              <input
                type="checkbox"
                name="fabricType"
                value={type}
                checked={filters.fabricType.includes(type)}
                onChange={handleChange}
                className="mr-2"
              />
              {type}
            </label>
          )
        )}
      </div>

      {/* Pattern */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Pattern</h3>
        {["Plain", "Printed"].map((p) => (
          <label key={p} className="block text-gray-600">
            <input
              type="checkbox"
              name="pattern"
              value={p}
              checked={filters.pattern.includes(p)}
              onChange={handleChange}
              className="mr-2"
            />
            {p}
          </label>
        ))}
      </div>

      {/* Color */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Color</h3>
        <input
          type="text"
          name="color"
          value={filters.color}
          onChange={handleChange}
          placeholder="e.g. White, Blue"
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>

      {/* Size */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
        <input
          type="text"
          name="size"
          value={filters.size}
          onChange={handleChange}
          placeholder="e.g. 1m x 1.5m"
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Max Price (₹)</h3>
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleChange}
          placeholder="e.g. 500"
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>

      <button
        onClick={() =>
          setFilters({
            gender: [],
            fabricType: [],
            pattern: [],
            color: "",
            size: "",
            price: "",
            search: "",
          })
        }
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
