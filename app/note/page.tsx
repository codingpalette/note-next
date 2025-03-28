import { Button } from "@/src/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/ui/card";
import { Plus } from "lucide-react";



export default function NotePage() {
  return (
    <>
      <div className="container mx-auto py-8">
        <Card className="max-w-md mx-auto mt-20 text-center">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">
              생성된 카테고리가 없습니다
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              노트를 정리할 카테고리를 만들어 보세요!
            </p>
            <Button
              // onClick={handleCreateCategory}
              // disabled={isCreating}
              className="flex items-center gap-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              {/* {isCreating ? "생성 중..." : "카테고리 생성하기"} */}
            </Button>
          </CardContent>
        </Card>
      </div>

    </>
  )
}
