class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] places = new int[2];
        int k=0;
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                if(nums[i] + nums[j] == target)
                {

                    System.out.println(i);
                    System.out.println(j);
                    places[k] = i;
                    places[++k] = j;

                    return places;
                }
            }



        }
        return places;
    }
}