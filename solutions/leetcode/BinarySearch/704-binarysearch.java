class Solution {
    public int search(int[] nums, int target) {
        int n = nums.length;
        int left = 0;
        int right = nums.length-1;

        //    System.out.println(mid);

        while(left <= right)
        {
            int mid = left + (right-left)/2;
            if(nums[mid] == target)
            {
                return mid;
            }
            else if(nums[mid] < target)
            {
                left = mid+1;
            }
            else
            {
                right = mid - 1;
            }

        }
        return -1;

    }
}