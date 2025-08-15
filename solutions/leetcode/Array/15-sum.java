class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Map<Integer,Integer> mapval = new HashMap<>();
        List<List<Integer>> lisval = new ArrayList<>();
        Set s = new HashSet();
        int curr_sum;
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i++)
        {
            mapval.put(nums[i],i);
        }
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                curr_sum = nums[i] + nums[j];

                if(mapval.containsKey(curr_sum * (-1)))
                {
                    int k = mapval.get(curr_sum * (-1));
                    {
                        if(!s.contains(nums[i] +":"+nums[j] +":"+nums[k]) && k>i && k>j)
                        {
                            lisval.add(Arrays.asList(nums[i],nums[j],nums[k]));
                            s.add(nums[i] +":"+nums[j] +":"+nums[k]);
                        }
                    }
                }
            }
        }
        return lisval;

    }
}