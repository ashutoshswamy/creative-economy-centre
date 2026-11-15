// One icon family site-wide: Heroicons 24 outline, 1.5 stroke. Maps keep content.ts free of JSX.
import {
  AcademicCapIcon, BanknotesIcon, BeakerIcon, BookOpenIcon, BuildingLibraryIcon, BuildingOffice2Icon,
  CalendarDaysIcon, ChartBarIcon, ChatBubbleLeftRightIcon, ClipboardDocumentCheckIcon, CpuChipIcon,
  DocumentTextIcon, GlobeAltIcon, HomeModernIcon, LightBulbIcon, MegaphoneIcon, MicrophoneIcon,
  PlayCircleIcon, ScaleIcon, SparklesIcon, TableCellsIcon, UserGroupIcon, UsersIcon, WrenchScrewdriverIcon,
  PaintBrushIcon, RocketLaunchIcon, MagnifyingGlassIcon, BriefcaseIcon, PresentationChartLineIcon,
  DocumentMagnifyingGlassIcon, MapPinIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconC = ComponentType<SVGProps<SVGSVGElement>>;

export const resourceIcon: Record<string, IconC> = {
  Report: DocumentTextIcon,
  Dataset: TableCellsIcon,
  "Case study": DocumentMagnifyingGlassIcon,
  "Policy document": ScaleIcon,
  "Recommended book": BookOpenIcon,
  "Global reference": GlobeAltIcon,
};

export const eventIcon: Record<string, IconC> = {
  Convening: UserGroupIcon,
  "Public lecture": MicrophoneIcon,
  Conference: PresentationChartLineIcon,
  Workshop: WrenchScrewdriverIcon,
  "Field school": MapPinIcon,
  Fellowship: AcademicCapIcon,
  Residency: HomeModernIcon,
};

export const policyIcon: Record<string, IconC> = {
  "Policy brief": ScaleIcon,
  "White paper": DocumentTextIcon,
  Roundtable: ChatBubbleLeftRightIcon,
};

export const clusterIcon: Record<string, IconC> = {
  "public-policy": BuildingLibraryIcon,
  entrepreneurship: RocketLaunchIcon,
  "technologies-ai": CpuChipIcon,
  "creative-cities": BuildingOffice2Icon,
  "culture-heritage": PaintBrushIcon,
  livelihoods: BanknotesIcon,
  leadership: LightBulbIcon,
};

export const reciIcon: Record<string, IconC> = {
  R: BeakerIcon,
  E: SparklesIcon,
  C: UsersIcon,
  I: MegaphoneIcon,
};

export const pathIcon: Record<string, IconC> = {
  Academia: AcademicCapIcon,
  Government: BuildingLibraryIcon,
  Industry: BriefcaseIcon,
  "Creators & practitioners": PaintBrushIcon,
  Technology: CpuChipIcon,
  International: GlobeAltIcon,
};

export const stepIcon: Record<string, IconC> = {
  "Tell us": ChatBubbleLeftRightIcon,
  Scope: MagnifyingGlassIcon,
  Agree: ClipboardDocumentCheckIcon,
  Begin: PlayCircleIcon,
};

export const moduleIcon: IconC[] = [MapPinIcon, ChartBarIcon, ScaleIcon, TableCellsIcon];

export { CalendarDaysIcon };

/** Decorative icon in a tinted tile; colour comes from the surrounding `.tone-*`. */
export const Ico = ({ i: I }: { i: IconC }) => (
  <span className="ico" aria-hidden="true"><I /></span>
);

export const Place = ({ children }: { children: string }) => (
  <span className="tag"><MapPinIcon className="tag-i" aria-hidden="true" />{children}</span>
);
