class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] places = new int[2];
        Map<Integer,Integer> data = new HashMap<>();
        int diff;
        for(int i=0;i<nums.length;i++)
        {
            diff = target - nums[i];
            if(data.containsKey(diff))
            {
                return new int[]{data.get(diff),i};
            }
            data.put(nums[i],i);
        }
        return new int[0];
    }
}
