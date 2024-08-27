class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        Heap = []
        for num in nums:
            heapq.heappush(Heap, num)
            if len(Heap) > k:
                heapq.heappop(Heap)
        return Heap[0]
        
