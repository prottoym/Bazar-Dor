import { Product } from "@/Types";
import ProductCard from "./ProductCard";

type Props = {
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
}: Props) => (
  <section
    id={id}
    className="w-full max-w-[1152px] mx-auto px-4 py-4 sm:py-5 scroll-mt-4"
  >
    <h2 className="flex items-center gap-1.5 text-[17px] sm:text-[20px] leading-7 font-bold">
      {icon && <span className={`text-[12px] ${iconClass}`}>{icon}</span>}
      {title}
    </h2>
    {subtitle && (
      <p className="mt-0.5 text-[12px] sm:text-[13px] text-black/60">
        {subtitle}
      </p>
    )}

    <div className="mt-3 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  </section>
);

export default ProductSection;