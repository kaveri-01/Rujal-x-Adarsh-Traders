import { useNavigate } from "react-router-dom";

const SubNavbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Fabrics", path: "/fabrics" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-indigo-600 text-white shadow-sm z-40">
      <ul className="flex justify-center items-center gap-12 py-3 text-lg font-medium">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
