import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui-kit';

function PagginationComponent() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="lg:mr-7.5">
          <PaginationPrevious className="w-10 h-10" href="#" label="" isActive={true} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="w-10 h-10" href="#" isActive={true}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="w-10 h-10" href="#" isActive={false}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="w-10 h-10" href="#" isActive={false}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="w-10 h-10 bg-light-gray" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="w-10 h-10" href="#" isActive={false}>
            32
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="lg:ml-7.5">
          <PaginationNext className="w-10 h-10" href="#" label="" isActive={true} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { PagginationComponent };
