import type { ContentBlock } from "@/data/exams";

type Props = {
  blocks: ContentBlock[];
  depth?: number;
};

export default function MaterieRenderer({ blocks, depth = 0 }: Props) {
  return (
    <div className={depth > 0 ? "mt-3 ml-4 border-l-2 border-gray-100 pl-4" : "space-y-6"}>
      {blocks.map((block, idx) => (
        <BlockItem key={idx} block={block} />
      ))}
    </div>
  );
}

function BlockItem({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "chapter":
      return (
        <div className="mt-8 first:mt-0">
          <h2 className="text-[#A43234] font-bold text-lg border-b border-[#A43234]/30 pb-2 mb-4">
            {block.title}
          </h2>
          {block.children && (
            <MaterieRenderer blocks={block.children} depth={1} />
          )}
        </div>
      );

    case "subchapter":
      return (
        <div className="mt-5">
          <h3 className="text-[#A43234] font-semibold text-base mb-3">
            {block.title}
          </h3>
          {block.children && (
            <MaterieRenderer blocks={block.children} depth={2} />
          )}
        </div>
      );

    case "key-idea":
      return (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-sm p-3">
          <span className="text-amber-600 font-bold text-sm mt-0.5 shrink-0">
            Idee-cheie
          </span>
          <p className="text-gray-800 text-sm leading-relaxed">{block.text}</p>
        </div>
      );

    case "definition":
      return (
        <div className="border-l-4 border-[#A43234] pl-4 py-1">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong className="font-bold text-gray-900">{block.term}:</strong>{" "}
            {block.text}
          </p>
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-gray-400 pl-4 py-2 bg-gray-50 rounded-sm">
          <p className="text-gray-700 italic text-sm leading-relaxed">{block.text}</p>
          {block.source && (
            <footer className="mt-1 text-xs text-gray-500">— {block.source}</footer>
          )}
        </blockquote>
      );

    case "exam-questions":
      return (
        <div className="border border-[#A43234] rounded-sm p-4 bg-red-50">
          <h4 className="text-[#A43234] font-semibold text-sm uppercase tracking-wide mb-3">
            Intrebari posibile de examen
          </h4>
          <ul className="space-y-2">
            {block.questions.map((q, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-800">
                <span className="text-[#A43234] font-bold shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "observation":
      return (
        <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-sm p-3">
          <span className="text-blue-600 font-bold text-sm mt-0.5 shrink-0">
            Observatie
          </span>
          <p className="text-gray-700 text-sm leading-relaxed italic">{block.text}</p>
        </div>
      );

    case "paragraph":
      return (
        <p className="text-gray-800 text-sm leading-relaxed">{block.text}</p>
      );

    default:
      return null;
  }
}
