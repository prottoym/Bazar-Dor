import { Product } from "@/Types";
import ProductCard from "./ProductCard";


type ProductData = {
  id?: string;
  title: string;
  icon?: string;
  iconClass?: string;
  subtitle?: string;
  products: Product[];
};

const ProductSection = ({
  id,
  title,
  icon,
  iconClass,
  subtitle,
  products,
}: ProductData) => (
  <section
    id={id}
    className="w-full max-w-[1152px] mx-auto px-4 py-4 scroll-mt-4"
  >
    <h2 className="flex items-center gap-1.5 text-[18px] leading-7 font-bold">
      {icon && <span className={`text-[12px] ${iconClass}`}>{icon}</span>}
      {title}
    </h2>
    {subtitle && <p className="text-[12px] text-black/60 mt-0.5">{subtitle}</p>}

    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  </section>
);

export default ProductSection;