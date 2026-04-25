import { useWizard } from "../WizardProvider";
import { RadioGroup, Toggle } from "../FormControls";
import {
  vectorStoreValues,
  vectorStoreLabels,
  rerankerValues,
  rerankerLabels,
  pdfParserValues,
  pdfParserLabels,
} from "../../../lib/types";
import {
  shouldShowRAGOptions,
  shouldShowPgVector,
  shouldShowImageDescription,
} from "../../../lib/validation";

export function RAGStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  const availableVectorStores = vectorStoreValues.filter((v) => {
    if (v === "pgvector") return shouldShowPgVector(config);
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-xl font-semibold tracking-tight">RAG</h2>
        <p className="text-text-tertiary mt-1 text-sm">
          Retrieval-Augmented Generation — connect your agent to documents
        </p>
      </div>

      <div className="grid gap-5">
        <Toggle
          label="Enable RAG"
          desc="Add vector store, document ingestion, and retrieval pipeline"
          checked={config.enable_rag}
          register={register("enable_rag")}
        />

        {shouldShowRAGOptions(config) && (
          <>
            <div>
              <label className="text-text mb-2 block text-sm font-medium">Vector Store</label>
              <RadioGroup
                options={availableVectorStores.map((v) => ({
                  value: v,
                  label: vectorStoreLabels[v],
                }))}
                value={config.vector_store}
                register={register("vector_store")}
                columns={2}
              />
              {config.vector_store === "pgvector" && (
                <p className="text-text-tertiary mt-1.5 text-xs">
                  Uses your existing PostgreSQL database — no extra service needed
                </p>
              )}
              {config.vector_store === "chromadb" && (
                <p className="text-text-tertiary mt-1.5 text-xs">
                  Embedded, no Docker service required
                </p>
              )}
            </div>

            <div>
              <label className="text-text mb-2 block text-sm font-medium">PDF Parser</label>
              <RadioGroup
                options={pdfParserValues.map((v) => ({ value: v, label: pdfParserLabels[v] }))}
                value={config.pdf_parser}
                register={register("pdf_parser")}
                columns={2}
              />
            </div>

            <div>
              <label className="text-text mb-2 block text-sm font-medium">Reranker</label>
              <RadioGroup
                options={rerankerValues.map((v) => ({ value: v, label: rerankerLabels[v] }))}
                value={config.reranker_type}
                register={register("reranker_type")}
                columns={3}
              />
            </div>

            <hr className="border-border" />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Toggle
                label="Google Drive ingestion"
                desc="Sync documents from Google Drive"
                checked={config.enable_google_drive_ingestion}
                register={register("enable_google_drive_ingestion")}
              />
              <Toggle
                label="S3/MinIO ingestion"
                desc="Sync documents from S3-compatible storage"
                checked={config.enable_s3_ingestion}
                register={register("enable_s3_ingestion")}
              />
              {shouldShowImageDescription(config) && (
                <Toggle
                  label="Image description"
                  desc="Describe images in PDFs using LLM vision"
                  checked={config.enable_rag_image_description}
                  register={register("enable_rag_image_description")}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
