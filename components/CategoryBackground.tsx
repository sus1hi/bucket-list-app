import { ActivityBackground } from "@/components/ActivityBackground";
import { OtherBackground } from "@/components/OtherBackground";
import { PlaceBackground } from "@/components/PlaceBackground";
import type { Category } from "@/types/bucket";

// Which illustration belongs to which category. Both the category pages and
// the bucket detail page need this same mapping, so it lives in one place.
//
// A Record keyed on Category rather than a chain of comparisons: adding a
// category to the union without giving it an illustration is a type error here,
// instead of a page that silently renders no background.
const BACKGROUNDS: Record<Category, React.ComponentType> = {
  Activity: ActivityBackground,
  Place: PlaceBackground,
  Other: OtherBackground,
};

export function CategoryBackground({ category }: { category: Category }) {
  const Background = BACKGROUNDS[category];
  return <Background />;
}
