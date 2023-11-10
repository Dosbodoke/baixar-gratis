import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid place-items-center h-full w-full mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Baixar grátis</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Insira a URL do vídeo que você quer baixar
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            className="flex-grow"
            placeholder="Enter URL"
            required
            type="url"
          />
          <Button type="submit">Download</Button>
        </div>
      </div>
    </div>
  );
}
